import { Box, Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TaskData } from "../../../common/types";
import { createTaskApi } from "../../../api/TaskApi";

const TaskDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { control, handleSubmit } = useForm<TaskData>({
    defaultValues: {
      name: "",
      period: "",
    },
  });

  const Submit: SubmitHandler<TaskData> = async (data) => {
    try {
      const response = await createTaskApi(data);

      if (response.status == "success") {
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open}>
      <Box sx={{ padding: 2 }}>
        <DialogTitle
          sx={{ textAlign: "center", padding: 0, marginBottom: "10px" }}
        >
          タスク追加
        </DialogTitle>
        <form onSubmit={handleSubmit(Submit)}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <TextField {...field} label="タスク名" />}
            />
            <Controller
              name="period"
              control={control}
              render={({ field }) => <TextField {...field} label="期限" />}
            />
            <Button type="submit" variant="contained">
              登録
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

export default TaskDialog;
