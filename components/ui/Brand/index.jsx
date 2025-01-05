import Link from "next/link";
import Image from "next/image";

const Brand = () => (
    <Link href="/">
        <Image
            src={"/Designfast.svg"}
            width={290}
            height={150}
            alt="Designfast logo"
        />  
    </Link>
)
export default Brand