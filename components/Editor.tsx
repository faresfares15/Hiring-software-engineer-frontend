"use client";

import { Avatars } from "@/components/Avatar";
import Toolbar from "@/components/Toolbar";
import { useRoom } from "@/liveblocks.config";
import { useSelf } from "@liveblocks/react/suspense";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import * as Y from "yjs";

type EditorProps = {
	doc: Y.Doc;
	provider: any;
};

function TiptapEditor({ doc, provider }: EditorProps) {
	// Get user info from Liveblocks authentication endpoint
  const userInfo = useSelf((me) => me.info);

  // Set up editor with plugins, and place user info into Yjs awareness and cursors
  const editor = useEditor({
		editorProps: {
			attributes: {
				// Add styles to editor element
				class: "flex-grow w-full h-full p-4 focus:outline-none",
			},
		},
		extensions: [
			StarterKit.configure({
				// The Collaboration extension comes with its own history handling
				history: false,
			}),
			// Register the document with Tiptap
			Collaboration.configure({
				document: doc,
			}),
			// Attach provider and user info
			CollaborationCursor.configure({
				provider: provider,
				user: userInfo,
			}),
		],
	});

	return (
		<div className="flex flex-col relative rounded-lg bg-white w-full h-full text-gray-900">
			<div className="flex justify-between items-center">
				<Toolbar editor={editor} />
				<Avatars />
			</div>
			<EditorContent editor={editor} className="relative h-full" />
		</div>
	);
}

export default function Editor() {
	const room = useRoom();
	const [doc, setDoc] = useState<Y.Doc>();
	const [provider, setProvider] = useState<any>();

	// Setting up Liveblocks Yjs provider
	useEffect(() => {
		const yDoc = new Y.Doc();
		const yProvider = new LiveblocksYjsProvider(room, yDoc);
		setDoc(yDoc);
		setProvider(yProvider);

		return () => {
			yDoc?.destroy();
			yProvider?.destroy();
		};
	}, [room]);

	if (!doc || !provider) {
		return null;
	}

	return (
		<TiptapEditor
			doc={doc}
			provider={provider}
		/>
	);
}
