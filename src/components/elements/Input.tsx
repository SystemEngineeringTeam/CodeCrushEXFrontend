import styles from "./Input.module.scss";

interface Props {
    placeholder: string;
    iconUrl: string;
    onChange: (value: string | number) => void;
}
export const Input = ({ placeholder, iconUrl, onChange }: Props) => {
    return (
        <div>
            <input
                placeholder={placeholder}
                className={styles.input}
                onChange={(e) => onChange(e.target.value)}
                // style={{
                //     backgroundImage: `url(${iconUrl})`,
                // }}
                required
            />
        </div>
    );
};
