import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { HomeLayout } from "../layout/HomeLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const HomePage = () => {
  return (
    <HomeLayout>
      {/* <Typography>Consequat excepteur anim consectetur nostrud Lorem ea aliqua nulla quis ullamco nulla nisi minim. Aute proident nostrud sit magna cupidatat aliquip mollit eu culpa. Officia esse pariatur consequat ullamco nostrud. Ex ea nulla fugiat ex esse aliquip reprehenderit id in. Adipisicing ipsum nulla culpa deserunt reprehenderit esse do adipisicing laboris. Laboris eiusmod est consequat laborum reprehenderit esse aliquip irure proident reprehenderit.</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.5},
          position:'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </HomeLayout>
  )
}