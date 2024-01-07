import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline bg-green-500 text-red-950">
      Hello world!
      </h1>
      <h2>
        Navigate
      </h2>
      <hr />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/typography">Typgraph</Link>
      </nav>
      <hr />
      <h2 className="text-9xl">typography</h2>
      <article className="text-xl truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magni atque cum temporibus impedit suscipit ratione doloribus reiciendis voluptatibus sunt nesciunt. Laudantium consequuntur, saepe obcaecati deserunt fuga asperiores delectus nostrum.</article>
      <h3 className="text-2xl">Body</h3>
      <p className="text-lg decoration-slice truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus dolorem, amet magnam asperiores quidem minus, velit molestias molestiae id, officiis quibusdam odit? Nostrum magni quos corrupti labore ipsam. Dolor.</p>
      <hr />
      <p className="text-base underline uppercase decoration-wavy truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus dolorem, amet magnam asperiores quidem minus, velit molestias molestiae id, officiis quibusdam odit? Nostrum magni quos corrupti labore ipsam. Dolor.</p>
      <hr />
      <p className="text-sm bold line-through decoration-double text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus dolorem, amet magnam asperiores quidem minus, velit molestias molestiae id, officiis quibusdam odit? Nostrum magni quos corrupti labore ipsam. Dolor.</p>
      <hr />
      <p className="text-xs italic overline decoration-dotted break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus dolorem, amet magnam asperiores quidem minus, velit molestias molestiae id, officiis quibusdam odit? Nostrum magni quos corrupti labore ipsam. Dolor.</p>
      <hr />
      <h2 className="border bg-green-600">
        <ol className="text-veujs-100 sm:text-sm lg:text-lg md:text-xl xl:text-base 2xl: text-3xl">
          <li className="md-3">Okello Thomas is the man here ok!</li>
          <li>Okello Thomas is the man here ok!</li>
          <li>Okello Thomas is the man here ok!</li>
          <li>Okello Thomas is the man here ok!</li>
        </ol>
      </h2>
      <hr />
      <h1>Padding...</h1>
      <p className="font-bold text-red-400 bg-black pl-6 ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus saepe quas quod deleniti ullam aliquam vitae autem excepturi distinctio minus praesentium modi, eos nobis provident ex aspernatur. Dolores, eligendi.</p>

      {/* Flex properties */}

      <div className="Parent">
        <div className="flex">
        <div className="basis-1/4">These are the dives we want to work with from now onwards</div>
        <div className="basis-1/4">These are the dives we want to work with from now onwards</div>
        <div className="basis-1/4">These are the dives we want to work with from now onwards</div>
        <div className="basis-1/4">These are the dives we want to work with from now onwards</div>
        </div>
      </div>
      <hr />
      <button type="button" className="bg-indigo-500" disabled>
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">

      </svg>
      Processing...
      </button>
      <br />
      <br />
      <hr />
      <ul>
        <a href="www.jkuat.ac.ke">Jkuat primary schools and jkuat secondary school at best</a><a href="www.jkuat.ac.ke">Jkuat primary schools and jkuat secondary school at best</a><a href="www.jkuat.ac.ke">Jkuat primary schools and jkuat secondary school at best</a>
      </ul>
    </main>
  )
}
