interface Props {
  setProjectDetailsOpened: React.Dispatch<React.SetStateAction<boolean>>,
  projects: string[],
  projectIndex: number,
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>
}

export default Props