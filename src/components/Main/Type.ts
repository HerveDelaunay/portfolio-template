interface Props {
  projectIndexOpened: boolean,
  setProjectIndexOpened: React.Dispatch<React.SetStateAction<boolean>>,
  projects: string[],
  setProjects: React.Dispatch<React.SetStateAction<string[]>>,
  projectIndex: number,
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>
}

export default Props