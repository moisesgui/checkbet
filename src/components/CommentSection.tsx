import { useState } from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  HStack,
  VStack,
  Icon,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react"
import { FiStar, FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import type { Review } from "../types"

// Mock data for comments
const reviews: Review[] = [
  {
    id: "1",
    user: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2023-05-15",
    comment:
      "Excellent platform with great customer service. Fast withdrawals and a wide variety of games. I've been using this platform for over a year and have never had any issues.",
    helpful: 24,
    unhelpful: 3,
  },
  {
    id: "2",
    user: "Maria Silva",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2023-04-22",
    comment:
      "Good platform overall. The interface is user-friendly and there are many betting options. Customer service could be improved though.",
    helpful: 18,
    unhelpful: 2,
  },
  {
    id: "3",
    user: "Carlos Mendes",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3,
    date: "2023-03-10",
    comment:
      "Average experience. Some games have technical issues and withdrawals can be slow sometimes. But the odds are competitive.",
    helpful: 12,
    unhelpful: 5,
  },
]

export const CommentSection = () => {
  const [sortBy, setSortBy] = useState("recent")
  const [newComment, setNewComment] = useState("")
  const [newRating, setNewRating] = useState(0)
  const [userVotes, setUserVotes] = useState<Record<string, string>>({})

  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.700", "gray.300")
  const commentTextColor = useColorModeValue("gray.600", "gray.400")

  // Sort comments based on selected option
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else {
      return b.helpful - a.helpful
    }
  })

  // Handle voting on comments
  const handleVote = (reviewId: string, voteType: "helpful" | "unhelpful") => {
    const currentVote = userVotes[reviewId]

    if (currentVote === voteType) {
      // User is removing their vote
      const newVotes = { ...userVotes }
      delete newVotes[reviewId]
      setUserVotes(newVotes)
    } else {
      // User is adding or changing their vote
      setUserVotes({
        ...userVotes,
        [reviewId]: voteType,
      })
    }
  }

  const StarRating = ({ rating, setRating }: { rating: number; setRating?: (rating: number) => void }) => {
    const filledColor = useColorModeValue("yellow.400", "yellow.300")
    const emptyColor = useColorModeValue("gray.300", "gray.600")

    return (
      <HStack spacing={1}>
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            as={FiStar}
            color={i < rating ? filledColor : emptyColor}
            fill={i < rating ? filledColor : "none"}
            boxSize={5}
            cursor={setRating ? "pointer" : "default"}
            onClick={() => setRating && setRating(i + 1)}
          />
        ))}
      </HStack>
    )
  }

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={6}>
          <Heading as="h2" size="lg">
            User Reviews
          </Heading>
          <Select width="auto" size="sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
          </Select>
        </Flex>

        {/* New comment form */}
        <Box bg={bgColor} borderRadius="22px" p={6} mb={8} boxShadow="md" borderWidth="1px" borderColor={borderColor}>
          <Heading as="h3" size="md" mb={4}>
            Write a Review
          </Heading>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Your Rating</FormLabel>
              <StarRating rating={newRating} setRating={setNewRating} />
            </FormControl>
            <FormControl>
              <FormLabel>Your Review</FormLabel>
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your experience with this company..."
                rows={4}
              />
            </FormControl>
            <Button colorScheme="brand" alignSelf="flex-end" isDisabled={newRating === 0 || newComment.trim() === ""}>
              Submit Review
            </Button>
          </VStack>
        </Box>

        {/* Comments list */}
        <VStack spacing={4} align="stretch">
          {sortedReviews.map((review) => (
            <Box
              key={review.id}
              bg={bgColor}
              borderRadius="22px"
              p={6}
              boxShadow="sm"
              borderWidth="1px"
              borderColor={borderColor}
            >
              <Flex mb={4}>
                <Avatar src={review.avatar} name={review.user} mr={4} />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold">{review.user}</Text>
                  <HStack>
                    <StarRating rating={review.rating} />
                    <Text fontSize="sm" color={commentTextColor}>
                      {new Date(review.date).toLocaleDateString()}
                    </Text>
                  </HStack>
                </VStack>
              </Flex>

              <Text color={textColor} mb={4}>
                {review.comment}
              </Text>

              <Flex justify="space-between" align="center">
                <Text fontSize="sm" color={commentTextColor}>
                  Esta análise foi útil?
                </Text>
                <HStack spacing={2}>
                  <IconButton
                    icon={<FiThumbsUp size={16} />}
                    aria-label="Útil"
                    size="sm"
                    colorScheme={userVotes[review.id] === "helpful" ? "green" : "gray"}
                    variant={userVotes[review.id] === "helpful" ? "solid" : "outline"}
                    onClick={() => handleVote(review.id, "helpful")}
                  />
                  <Text fontSize="sm">{review.helpful}</Text>

                  <IconButton
                    icon={<FiThumbsDown size={16} />}
                    aria-label="Não Útil"
                    size="sm"
                    colorScheme={userVotes[review.id] === "unhelpful" ? "red" : "gray"}
                    variant={userVotes[review.id] === "unhelpful" ? "solid" : "outline"}
                    onClick={() => handleVote(review.id, "unhelpful")}
                  />
                  <Text fontSize="sm">{review.unhelpful}</Text>
                </HStack>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}
