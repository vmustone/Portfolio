const AboutMe = () => {
    return (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-6">
                <p className="text-white text-lg max-w-lg mx-auto font-bold">
                    Hi, I'm Ville Mustonen, a passionate snowboarder and software developer.
                    I've been snowboarding my entire life, which has shaped my determined and challenge-driven mindset—qualities I also apply to coding.
                    I'm studying at Hive Helsinki, where I've focused on the fundamentals of programming and problem-solving.
                    I'm particularly fascinated by frontend development, but I'm always ready to take on new challenges and expand my skill set.
                    My previous profession as an electrician has given me a strong technical understanding and a structured approach to work.
                </p>
                <div className="flex justify-center gap-4 p-10 text-white font-bold">
                    <a className="hover:text-black" href="https://www.linkedin.com/in/ville-mustonen-42336b11a/">Linkedin</a>
                    <a className="hover:text-black" href="https://github.com/vmustone">Github</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe