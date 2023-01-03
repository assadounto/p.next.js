import Image from "next/image";
import Link from "next/link";
import { contactLinkClickEvent } from "../modules/ga";

export default function FreelancingStack() {
  return (
    <div>
      <div className="flex gap-2">
        <Link
          href="https://www.upwork.com/freelancers/~014888431fc6600dce"
          target="_blank"
          className="w-full h-12 flex items-center justify-center md:w-auto px-6 hover:shadow-md bg-gradient-to-r from-primary-50 to-primary-50/20 backdrop-blur-sm rounded-md"
          onClick={() => contactLinkClickEvent("upwork")}
        >
          <Image
            src="/images/upwork.png"
            alt="Upwork logo"
            width={80}
            height={12}
          />
        </Link>
      </div>
    </div>
  );
}
