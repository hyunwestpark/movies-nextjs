import { API_URL } from "../constants";
import styles from "../styles/movie-credits.module.css";
import CreditProfile from "./credit-profile";

interface MovieCreditsProps {
  id: string;
}

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({ id }: MovieCreditsProps) {
  const credits = await getCredits(id);
  console.log(
    credits.filter((credit) => credit.known_for_department === "Acting").length
  );

  return (
    <div>
      <h3 className={styles["credit-type"]}>
        Actors (
        {
          credits.filter((credit) => credit.known_for_department === "Acting")
            .length
        }
        )
      </h3>
      {credits
        .filter((credit) => credit.known_for_department === "Acting")
        .map((credit) => (
          <CreditProfile
            id={credit.id}
            profile_path={credit.profile_path}
            name={credit.name}
            character={credit.character}
          />
        ))}
      {credits.filter((credit) => credit.known_for_department === "Crew")
        .length ? (
        <div>
          <h3 className={styles["credit-type"]}>
            Crews (
            {
              credits.filter((credit) => credit.known_for_department === "Crew")
                .length
            }
            )
          </h3>
          {credits
            .filter((credit) => credit.known_for_department === "Crew")
            .map((credit) => (
              <CreditProfile
                id={credit.id}
                profile_path={credit.profile_path}
                name={credit.name}
                character={credit.character}
              />
            ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
