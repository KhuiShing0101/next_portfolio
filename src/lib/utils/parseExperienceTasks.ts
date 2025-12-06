export type ParsedTasks = {
  responsibilities: string[];
  technologies: string;
  teamInfo: string;
};

export function parseExperienceTasks(tasks: string[]): ParsedTasks {
  const responsibilities: string[] = [];
  let technologies = '';
  let teamInfo = '';

  tasks.forEach((task) => {
    const trimmedTask = task.trim();

    // Check if it's a tech stack line
    if (trimmedTask.startsWith('Tech Stack:')) {
      technologies = trimmedTask.replace('Tech Stack:', '').trim();
    }
    // Check if it's team/colleague info
    else if (trimmedTask.toLowerCase().includes('colleague') || trimmedTask.toLowerCase().includes('team')) {
      teamInfo = trimmedTask;
    }
    // Otherwise, it's a responsibility
    else if (trimmedTask && !trimmedTask.startsWith('As a ')) {
      // Skip intro lines like "As a developer..."
      responsibilities.push(trimmedTask);
    }
  });

  return {
    responsibilities,
    technologies,
    teamInfo,
  };
}
