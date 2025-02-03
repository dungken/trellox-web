import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'

import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main',
  background: '#fff',
  borderRadius: '5px',
  paddingX: '5px',
  border: 'none',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    background: 'primary.50'
  }
}

function index() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      borderTop: '1px solid #1976d2',
      paddingX: 2
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="DungDev MERN Stack Board"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automations"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '16px'
            }
          }}
          max={7}>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
          <Tooltip title="DungDev">
            <Avatar
              alt="Dung Ken"
              src="https://avatars.githubusercontent.com/u/126952464?s=96&v=4"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default index
