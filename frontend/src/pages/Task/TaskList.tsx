import { Box, Button, Divider, Grid, List } from "@mui/material";
import Layout from "../../Layout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import { fetchTaskAllData } from "../../api/TaskApi";
import TaskStatus from "./components/status";
import TaskDialog from "./components/dialog";

type DataType = {
  name: string;
  period: string;
  status: string;
};

const TaskListPage = () => {
  const [tasks, setTasks] = useState<DataType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTaskAllData();
        setTasks(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title="タスク一覧">
      <Box sx={{ width: "40%" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => {
              setOpen(true);
            }}
            sx={{ maxWidth: "150px", marginY: 2 }}
          >
            新規追加
          </Button>
        </Box>
        <List
          sx={{
            maxHeight: "600px",
            paddingX: 3,
            border: "1px solid #bcbcbc",
            borderRadius: "10px",
          }}
        >
          {tasks.map((task, index) => (
            <>
              <Grid key={index} container spacing={2}>
                <Grid size={8}>
                  <Box sx={{ textAlign: "start" }}>{task.name}</Box>
                </Grid>
                <Grid size={4}>
                  <TaskStatus status={task.status} />
                </Grid>
              </Grid>
              <Box>期限：{task.period}</Box>
              <Divider
                variant="inset"
                component="li"
                sx={{ marginX: 0, marginY: 1 }}
              />
            </>
          ))}
        </List>
      </Box>
      <TaskDialog open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default TaskListPage;
