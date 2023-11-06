import iconGit from "../../assets/Perfiles/GitHub.png"
import lucas from "../../assets/Perfiles/lucas.png"
import juan from "../../assets/Perfiles/juan.png"
import mateo from "../../assets/Perfiles/mateo.png"
import juli from "../../assets/Perfiles/juli.png"
import maxi from "../../assets/Perfiles/maxi.png"
import willy from "../../assets/Perfiles/willy.png"
import leo from "../../assets/Perfiles/leo.png"
import sofi from "../../assets/Perfiles/sofi.png"

export default function Aboutus() {
  return (
    <section class="text-gray-600 body-font">
      <div class="flex flex-col mt-8 mx-0 items-center ">
        <div class="flex flex-col text-center w-full h-64 mx-0 mb-16 relative sm:h-80">
          <div class="absolute inset-0 bg-[url('https://messagemedia.com/us/wp-content/uploads/sites/4/2020/04/Fitness-header-1.jpg')] blur-sm"></div>
          <div class="xl:flex-col z-10 justify-center lg:mt-10 md:mb-4">
            <h1 class="xl:text-25xl  lg:text-21xl font-bebas mb-4 text-orangeFred-100 md:mt-12">
              GENSHY TEAM
            </h1>
            <p class="xl:w-70 absolute mx-10 text-orangeFred-100 font-monse ">
            Greetings! We are a passionate team of 8 dedicated developers committed to creating the best online experience for fitness enthusiasts and sports supplement seekers. Together, we blend technology with a love for wellness to bring you an intuitive and functional platform.
            </p>
          </div>
        </div>

        <div class="xl:grid xl:grid-cols-4 xl:gap-6 xl:mb-16 lg:grid lg:grid-cols-4 lg:gap-6 lg:mb-16 md:grid md:grid-cols-2 md:gap-12 md:mb-16 sm:grid sm:grid-cols-1 sm:gap-6 sm:mb-16">
          {/* lucas card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/FixGlitch">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={lucas}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={lucas}
                            alt="github de Lucas Blanco"
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-3" src={iconGit} alt="" />
                            <h1 class="text-9xl font-bebas text-blackFred-300 mt-0">
                              FixGlitch
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Lucas Blanco
                </h2>
                <p class="text-gray-500">Software Dev</p>
              </div>
            </div>
          </div>
          {/* juan card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/JuanUbaldi">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={juan}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={juan}
                            alt="github de Juan Ubaldi"
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-3" src={iconGit} alt="" />
                            <h1 class="text-9xl font-bebas text-blackFred-300 mt-0">
                              juanUbaldi
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Juan Ubaldi
                </h2>
                <p class="text-gray-500">Frontend Dev</p>
              </div>
            </div>
          </div>
          {/* mateo card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/mateoOA">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={mateo}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={mateo}
                            alt="github de Mateo Ossorio"
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-3" src={iconGit} alt="" />
                            <h1 class="text-9xl font-bebas text-blackFred-300 mt-0">
                              MateoOA
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Mateo Ossorio Arana
                </h2>
                <p class="text-gray-500">Frontend Dev</p>
              </div>
            </div>
          </div>
          {/* sofi card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/BlancSofia27">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={sofi}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={sofi}
                            alt="github de Sofia Blanc"
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-3" src={iconGit} alt="" />
                            <h1 class="text-9xl font-bebas text-blackFred-300 mt-0">
                              BlancSofia27
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Sofia Blanc
                </h2>
                <p class="text-gray-500">Frontend Dev</p>
              </div>
            </div>
          </div>
          {/* juli card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/JulianBelmartino">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={juli}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={juli}
                            alt="github de Julian Belmartino"
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-2" src={iconGit} alt="" />
                            <h1 class="text-4xl font-bebas text-blackFred-300 mt-0">
                              JulianBelmartino
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Julian Belmartino
                </h2>
                <p class="text-gray-500">Fullstack Dev</p>
              </div>
            </div>
          </div>
          {/* maxi card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/cerramaximiliano">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={maxi}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={maxi}
                            alt="github de Maximiliano Cerra "
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-2" src={iconGit} alt="" />
                            <h1 class="text-4xl font-bebas text-blackFred-300 mt-0">
                              cerramaximiliano
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Maximiliano Cerra
                </h2>
                <p class="text-gray-500">Fullstack dev</p>
              </div>
            </div>
          </div>
          {/* willy card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/WVallejos">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={willy}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={willy}
                            alt="github de Willy Vallejos"
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-3" src={iconGit} alt="" />
                            <h1 class="text-9xl font-bebas text-blackFred-300 mt-0">
                              WVallejos
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Willy Vallejos
                </h2>
                <p class="text-gray-500">Fullstack dev</p>
              </div>
            </div>
          </div>
          {/* leo card */}
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex items-center ">
                <a href="https://github.com/JuanLeonelPogonza">
                  <div class="group h-32 w-32 ">
                    <div class="relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div class="absolute inset-0">
                        <img
                          class="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                          src={leo}
                          alt=""
                        />
                      </div>

                      <div class="absolute inset-0  rounded-full  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="absolute inset-0">
                          <img
                            class="h-full w-full blur-sm rounded-full object-cover shadow-sm "
                            src={leo}
                            alt="github de Juan Leonel Pogonza "
                          />

                          <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <img class="h-16 mt-2" src={iconGit} alt="" />
                            <h1 class="text-4xl font-bebas text-blackFred-300 mt-0">
                              JuanLeonelPogonza
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="flex-grow ml-6">
                <h2 class="text-gray-900 title-font font-medium">
                  Juan Leonel Pogonza
                </h2>
                <p class="text-gray-500">Fullstack dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
