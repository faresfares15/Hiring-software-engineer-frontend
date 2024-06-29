"use client"
import {ClientSideSuspense} from "@liveblocks/react";
import {RoomProvider} from "@/liveblocks.config";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <RoomProvider id="my-room" initialPresence={{}}>
            <ClientSideSuspense fallback="Loading…">
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>

    );
}