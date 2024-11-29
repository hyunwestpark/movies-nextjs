import { API_URL } from "../constants";
import styles from "../styles/movie-credits.module.css";

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
        Actor (
        {
          credits.filter((credit) => credit.known_for_department === "Acting")
            .length
        }
        )
      </h3>
      {credits
        .filter((credit) => credit.known_for_department === "Acting")
        .map((credit) => (
          <img
            src={
              credit.profile_path
                ? credit.profile_path
                : "/image/blank-profile.png"
            }
            key={credit.id}
            alt={credit.original_name}
            className={styles["profile-img"]}
          />
        ))}
      {credits.filter((credit) => credit.known_for_department === "Crew")
        .length ? (
        <div>
          <h3 className={styles["credit-type"]}>
            Crew (
            {
              credits.filter((credit) => credit.known_for_department === "Crew")
                .length
            }
            )
          </h3>
          {credits
            .filter((credit) => credit.known_for_department === "Crew")
            .map((credit) => (
              <img
                src={
                  credit.profile_path
                    ? credit.profile_path
                    : "/image/blank-profile.png"
                }
                key={credit.id}
                alt={credit.original_name}
                className={styles["profile-img"]}
              />
            ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
