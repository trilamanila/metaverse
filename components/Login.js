import Image from 'next/image'

function Login() {
  return (
    <div className="relative bg-black text-white">
      <h1>Login screen</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          className="rounded-full object-cover"
          src="/../public/trilamanila.png"
          height={150}
          width={150}
        />

        <button className="animate-pulse rounded-lg bg-red-600 p-4 font-bold">
          Login to the METAVERSE
        </button>
      </div>

      <div className="h-screen w-full">
        <Image
          src="/../public/background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
