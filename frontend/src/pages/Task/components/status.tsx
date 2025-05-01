import { Box } from "@mui/material";

const TaskStatus = ({ status }: { status: string }) => {
  const bgcolor =
    status == "Not_started"
      ? "#ffcfcd"
      : status == "In_progress"
      ? "#fef7ce"
      : status == "Complete"
      ? "#dcf8e5"
      : "";

  const textcolor =
    status == "Not_started"
      ? "#9d1914"
      : status == "In_progress"
      ? "#947403"
      : status == "Complete"
      ? "#184f26"
      : "";

  return (
    <Box
      sx={{ bgcolor: `${bgcolor}`, color: `${textcolor}`, borderRadius: "5px" }}
    >
      {status}
    </Box>
  );
};

export default TaskStatus;
