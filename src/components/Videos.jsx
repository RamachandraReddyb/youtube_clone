import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "../components";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: "100%", md: "unset" } }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
