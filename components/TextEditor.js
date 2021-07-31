// // import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { EditorState } from "draft-js";
// import { db } from "../firebase";
// import { useRouter } from "next/dist/client/router";
// import { useSession } from "next-auth/client";

// import { convertFromRaw, convertToRaw, ContentState } from "draft-js";
// import { useCollectionOnce } from "react-firebase-hooks/firestore";

// const Editor = dynamic(
//   () => import("react-draft-wysiwyg").then((module) => module.Editor),
//   {
//     ssr: false,
//   }
// );
// function TextEditor() {
//   const [session] = useSession();
//   const router = useRouter();
//   const { id } = router.query;
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const onEditorStateChange = (editorState) => {
//     setEditorState(editorState);
//     db.collection("userDocs")
//       .doc(session?.user?.email)
//       .collection("docs")
//       .doc(id)
//       .set(
//         {
//           editorState: convertToRaw(editorState.getCurrentContent()),
//         },
//         { merge: true }
//       );
//   };
//   const [snapshot] = useCollectionOnce(
//     db
//       .collection("userDocs")
//       .doc(session?.user?.email)
//       .collection("docs")
//       .doc(id)
//   );

//   useEffect(() => {
//     // if (snapshot?.data()?.editorState) {
//     //   setEditorState(
//     //     EditorState.createWithContent(
//     //       convertFromRaw(snapshot?.data()?.editorState)
//     //     )
//     //   );
//     // }
//     console.log(
//       EditorState.createWithContent(
//         ContentState.createFromBlockArray(
//           snapshot?.data()?.editorState.contentBlocks
//         )
//       )
//     );
//   }, []);
//   return (
//     <div className="bg-gray1 min-h-screen pb-16">
//       <Editor
//         editorState={editorState}
//         toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
//         wrapperClassName="wrapperClassName"
//         editorClassName="mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-10 min-h-screen"
//         onEditorStateChange={onEditorStateChange}
//       />
//     </div>
//   );
// }

// export default TextEditor;

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { db } from "../firebase";
import { useRouter } from "next/dist/client/router";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function TextEditor() {
  const [session] = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;

  const [snapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
  };

  return (
    <div className="bg-gray1 min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border min-h-screen"
      />
    </div>
  );
}

export default TextEditor;
