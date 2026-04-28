import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 text-transparent">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-xl tracking-widest" style={{ fontFamily: "var(--font-montserrat)" }}>
            КИБЕР<span className="text-primary">ЩИТОК</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#threats">
            <Button
              className="bg-primary text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              style={{ paddingLeft: "24px", paddingRight: "16px" }}
            >
              Узнать угрозы <Icon name="ArrowUpRight" size={16} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}