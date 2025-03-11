import NextImage from "@/components/Image"

export default function Work() {
    let chamber = ["/images/chamber/chamber_hero.png", "/images/chamber/chamber_mag.png", "/images/chamber/chamber_panel.png", "/images/chamber/chamber_full.png"];
    let chilifest = ["/images/chilifest/chilifest_hero.png", "/images/chilifest/chilifest_home.png", "/images/chilifest/chilifest_photos.png"];
    let discord = ["/images/AI/AI_chaos.jpeg", "/images/AI/AI_dog.jpeg", "/images/AI/AI_potato.jpeg", "/images/AI/AI_turkey.jpeg", "/images/AI/AI_twilight.jpeg", "/images/AI/AI_nerd.jpeg", "/images/AI/AI_washington.jpeg", "/images/AI/AI_chaos.jpeg"]

    return (
        <div className="work-container">
            <div className="chamber">
                {chamber.map((src, index) => (
                    <NextImage key={index} src={src} />
                ))}
            </div>
            <div className="chilifest">
                {chilifest.map((src, index) => (
                    <NextImage key={index} src={src} />
                ))}
            </div>
            <div className="discord">
                {discord.map((src, index) => (
                    <NextImage key={index} src={src} />
                ))}
            </div>
        </div>

    )
}