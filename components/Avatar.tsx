import { useOthers, useSelf } from "@liveblocks/react/suspense";
import Image from "next/image";

export function Avatars() {
	const users = useOthers();
	const currentUser = useSelf();

	return (
		<div className={"flex px-3"}>
			{users.map(({ connectionId, info }) => {
				return (
					<Avatar
						key={connectionId}
						picture={"/images/sun.png"}
						name={"fares"}
					/>
				);
			})}

			{currentUser && (
				<div className="relative ml-8 first:ml-0">
					<Avatar
						picture={"/images/sun.png"}
						name={"fares"}
					/>
				</div>
			)}
		</div>
	);
}

export function Avatar({ picture, name }: { picture: string; name: string }) {
	return (
		<div
			className="flex items-center justify-center relative border-4 border-white rounded-full w-10 h-10 bg-gray-400 -ml-3"
			data-tooltip={name}
		>
			<div className="absolute top-full opacity-0 transition-opacity duration-150 ease-in-out px-2.5 py-1 text-white text-xs rounded-md mt-2.5 z-10 bg-black whitespace-nowrap group-hover:opacity-100">{name}</div>
			<Image
				src={picture}
				alt="Avatar Picture"
                width={40}
                height={40}
				className={"w-full h-full rounded-full"}
				data-tooltip={name}
			/>
		</div>
	);
}
