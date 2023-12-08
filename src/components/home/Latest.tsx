export default function Latest() {
  return (
    <main className="px-52 max-xl:px-8 max-md:px-4 py-8 flex flex-col gap-2">
      <div>
        <h1 className="font-semibold text-xl p-2 bg-neutral-950 text-neutral-50 w-fit">
          BERITA TERBARU
        </h1>
        <div className="h-1 w-full bg-neutral-950" />
      </div>
      <div className="grid grid-rows-3 max-md:grid-rows-2 gap-1 max-md:gap-2">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 md:row-span-2">
          <div className="group relative h-96 max-md:h-48 overflow-hidden">
            <img
              className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-2 pt-8 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
              <h2 className="md:text-2xl font-medium text-neutral-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora assumenda doloribus quas molestias.
              </h2>
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 max-md:hidden gap-2 h-96">
            <div className="group overflow-hidden relative">
              <img
                className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
                src="https://picsum.photos/600"
                alt=""
              />
              <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
                <h2 className="font-medium text-neutral-50">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora assumenda doloribus quas molestias.
                </h2>
                <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                  BUDAYA
                </p>
              </div>
            </div>
            <div className="group overflow-hidden relative">
              <img
                className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
                src="https://picsum.photos/600"
                alt=""
              />
              <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
                <h2 className="font-medium text-neutral-50">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora assumenda doloribus quas molestias.
                </h2>
                <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                  BUDAYA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-2">
          <div className="group h-48 relative overflow-hidden">
            <img
              className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
              <h2 className="font-medium text-xs text-neutral-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora assumenda doloribus quas molestias.
              </h2>
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </div>
          <div className="group h-48 relative overflow-hidden">
            <img
              className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
              <h2 className="font-medium text-xs text-neutral-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora assumenda doloribus quas molestias.
              </h2>
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </div>
          <div className="group h-48 relative overflow-hidden max-md:hidden">
            <img
              className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
              <h2 className="font-medium text-neutral-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora assumenda doloribus quas molestias.
              </h2>
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
