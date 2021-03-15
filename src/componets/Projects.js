import ProjectCard from './ProjectCard';

function Projects() {
    
    const myProjects = [

        {
        title: "Soft Journal",
        about: "A Journal app for users to write down their thoughts and feelings to better express themselves.",
        image: "placeholder",
        id: 1,
        },
        {
        title: "Rate My Instructor",
        about: "App to view reviews on their instructors, or give their feedback by giving a rating or making a comment.",
        image: "placeholder",
        id: 2,
        },
        {
        title: "Pet Play Date",
        about: "Users can set up their pet's profile and send requests to other user's pets to set up playdates at different parks.",
        image: "placeholder",
        id: 3,
        },
        {
        title: "Alien Invaders",
        about: "I made a clone of Alien Invaders in Python",
        image: "placeholder",
        id: 4,
        },
    ]
    

    const mappedProjects = myProjects.map((project) => {
        return <ProjectCard  
        title={project.title}
        key={project.id}
        about={project.about}
        />
    })

    // post={post} key={post.id} 
    //     onDeletePost={handleDeletePost}
    //     handleEditPost={handleEditPost}
    //     day={day}

    return (
        <div>
            My Project List
            {mappedProjects}
        </div>
    );
  }
  
  export default Projects;