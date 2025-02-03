"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { TextButton } from "@/components/elements/TextButton";
import { Input } from "@/components/elements/Input";
import { PhaseIcon } from "@/components/elements/PhaseIcon";
import { SideMenu } from "@/components/layout/SideMenu";
import { useState } from "react";
import { Code } from "@/components/layout/right/Code";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <TextButton color="blue">あいうえお</TextButton>
                <Input placeholder={"あいことばを入力"} iconUrl="/icon.png" />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "30px",
                    }}
                >
                    <PhaseIcon phase="read" isOn={true} />
                    <PhaseIcon phase="delete" isOn={true} />
                    <PhaseIcon phase="fix" isOn={true} />
                    <PhaseIcon phase="answer" isOn={true} />
                    <SideMenu isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                </div>
                <div>
                    <Code phase="read" />
                </div>
            </main>
        </div>
    );
}
