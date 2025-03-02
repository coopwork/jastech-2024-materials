import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <div className='flex items-center gap-5'>

            <Link href={'/about-us'}>About US</Link>
            <Link href={'/sign-in'}>Sign In</Link>


          <Image width={300} height={200} src={'/photo.jpeg'} alt={'test'}/>
            <img width={300} height={200} src="/photo.jpeg" alt="test"/>
        </div>
    </div>
  );
}
