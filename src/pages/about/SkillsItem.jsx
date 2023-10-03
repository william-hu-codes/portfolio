import "./SkillsItem.css"

export default function SkillItem({ skill, key }) {
    // console.log(skill)
    return (
        <div key={key} className="skill-item">
            <h4>{skill}</h4>
        </div>
    )
}