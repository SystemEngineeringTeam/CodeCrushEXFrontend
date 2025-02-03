"use client";
import { RoomCreated } from "@/components/layout/RoomCreated";
import { RoomSelection } from "@/components/layout/RoomSelection";
import { MatchingStatusAtom } from "../../atoms/matchingStore";
import { useAtomValue } from "jotai";
import { JoinRoom } from "@/components/layout/JoinRoom";

const Page = () => {
    const matchingStatus = useAtomValue(MatchingStatusAtom);
    if (matchingStatus === "select") {
        return <RoomSelection />;
    } else if (matchingStatus === "create") {
        return <RoomCreated />;
    } else {
        return <JoinRoom />;
    }
};

export default Page;
