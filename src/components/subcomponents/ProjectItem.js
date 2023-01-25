function ProjectItem(props) {
    return (
        <div className="project-card-top">
            <div className='project-card-video-container'>
                <video loop muted autoPlay>
                    <source src={props.project_src} type="video/mp4" />
                </video>
            </div>
            <h2 className='item-heading'><a href={props.project_url} target="_blank" rel="noopener noreferrer">{props.project_name}</a></h2>
            <h4 className='item-content'>
                <p>
                    {props.project_content}
                </p>
            </h4>
        </div>
    );
}

export default ProjectItem;