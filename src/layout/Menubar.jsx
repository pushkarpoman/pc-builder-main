import Link from "next/link";

const Menubar = () => {
  return (
    <div className="bg-white shadow-lg hidden md:block sticky top-0 z-50">
      <div className="main-container">
        <ul className="flex gap-5 sticky">
          <li className="group py-3">
            CPU / Processor
            <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Amd Ryzen</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Intel</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Other</Link>
              </li>
            </ul>
          </li>
          <li className="group py-3">
            Motherboard
            <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Msi </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Asus</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Gigabyte</Link>
              </li>
            </ul>
          </li>
          <li className="group py-3">
            Ram
            <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Crosair</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">HyperX</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Fury</Link>
              </li>
            </ul>
          </li>
          <li className="group py-3">
            Power supply unit
            <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Circle</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Antech</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Zebronics</Link>
              </li>
            </ul>
          </li>
          <li className="group py-3">
            Storage device
            <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">HDD</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">SDD</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">M.2 nvme </Link>
              </li>
            </ul>
          </li>
          <li className="group py-3">
            Monitor
            <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Acer</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Alienware</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Zowie</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
