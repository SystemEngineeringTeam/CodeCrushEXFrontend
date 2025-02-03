import { TextButton } from "../elements/TextButton";
import styles from "../../app/matching/page.module.scss";
import roomselection from "../../components/layout/RoomSelection.module.scss";
import { useSetAtom } from "jotai";
import { matchingStatusAtom } from "@/atoms/matchingStore";

export const RoomSelection = () => {
    const setMatchingStatus = useSetAtom(matchingStatusAtom);
    return (
        <div className={`${styles.contentBox} ${roomselection.buttonBox}`}>
            <TextButton
                color="blue"
                onClick={() => setMatchingStatus("create")}
            >
                ルームの作成
            </TextButton>
            <TextButton color="green" onClick={() => setMatchingStatus("join")}>
                ルームの参加
            </TextButton>
        </div>
    );
};
