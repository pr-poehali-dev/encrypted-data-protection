export default function RotatingTextAccent() {
  const text = "-- Защитись! Узнай больше --- "

  return (
    <div className="absolute bottom-20 right-8 w-24 h-24 md:w-32 md:h-32">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://cdn.poehali.dev/projects/40c783e4-8e7c-494d-b1c8-0c99a6416e31/files/fc1ea2e7-fb5f-435b-b3c3-8cf13d901600.jpg"
            alt="3D щит"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
          />
        </div>

        <div className="absolute inset-0 animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text className="text-xs fill-white font-medium">
              <textPath href="#circle" startOffset="0%">
                {text.repeat(2)}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}