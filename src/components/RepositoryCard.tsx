import { FC, useRef } from 'react'
import { Repository } from '../../types/Repository'
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core'
import { CloudDownload } from '@material-ui/icons'

interface Props {
  repository: Repository
}

export const RepositoryCard: FC<Props> = props => {
  const downloadAnchorRef = useRef<HTMLAnchorElement>()

  const onDownloadButtonClicked = () => {
    downloadAnchorRef.current.click()
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{props.repository.name}</Typography>
        <Typography color="textSecondary">
          {props.repository.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={onDownloadButtonClicked}
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
        >
          <CloudDownload />
          ダウンロード
        </Button>
        <a
          ref={downloadAnchorRef}
          href={props.repository.repository + '/archive/master.zip'}
          download={props.repository.download ?? props.repository.name + '.zip'}
        ></a>
      </CardActions>
    </Card>
  )
}
