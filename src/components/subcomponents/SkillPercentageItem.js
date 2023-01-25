function SkillPercentageItem (props) {
    return <div className="skill-statistic-percentage-item">
        <p className='item-content'>HTML</p>
        <div className="skill-statistic-percentage-item-bar">
            <div className="skill-statistic-percentage-item-bar-fill" style={{ width: '90%' }}></div>
        </div>
        <p className='item-content'>90%</p>
    </div>;
}

export default SkillPercentageItem