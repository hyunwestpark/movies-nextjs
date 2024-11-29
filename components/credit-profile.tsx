import styles from "../styles/movie-credits.module.css";

interface CreditProfileProps {
  id: string;
  profile_path: string;
  name: string;
  character: string;
}

export default function CreditProfile({
  id,
  profile_path,
  name,
  character,
}: CreditProfileProps) {
  return (
    <div key={id} className={styles["profile-container"]}>
      <img
        src={profile_path ? profile_path : "/image/blank-profile.png"}
        alt={name}
        className={styles["profile-img"]}
      />
      <div className={styles["profile-tooltip"]}>
        <span>{character}</span> | {name}
      </div>
    </div>
  );
}
