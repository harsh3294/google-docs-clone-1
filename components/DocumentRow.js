import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
function DocumentRow({ id, fileName, date }) {
  const router = useRouter();
  return (
    <div
      className="flex items-center pt-2  pb-4 rounded-lg hover:bg-gray-100 cursor-pointer  text-gray-700 text-sm "
      onClick={() => router.push(`/doc/${id}`)}
    >
      <Icon name="article" size="2xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p className="pr-12 text-sm">{date?.toDate().toLocaleDateString()}</p>
      <Icon
        name="more_vert"
        size="2xl"
        color="gray"
        buttonType="outline"
        iconOnly={true}
        rounded={true}
        ripple="dark"
        className="border-0"
      />
    </div>
  );
}

export default DocumentRow;
