function getProjectThemeClass(project) {
    return (
        {
            880: "bg_palm",
            887: "bg_parva",
            881: "bg_savram",
            888: "bg_stark",
        }[project?.project_id] || "bg_palm"
    );
}

export default getProjectThemeClass;
