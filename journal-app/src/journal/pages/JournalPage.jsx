import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView />
            {/* <NoteView /> */}
            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    hover: { backgroundColor: "error.main", opacity: 0.9 },
                    postion: "fixed",
                    left: 1700,
                    bottom: 70,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
