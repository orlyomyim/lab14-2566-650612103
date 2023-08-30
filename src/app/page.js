"use client";
import {
  Container,
  Text,
  Title,
  Rating,
  Textarea,
  Button,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title size="h4" mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        size="sm"
        minRows={3}
        mt="xs"
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider size="xs" mt="sm" />
      <Group mt="sm" position="center">
        <Title order={4}>Elon Musk</Title> <Rating value={5} readOnly />
      </Group>
      <Text c="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider size="xs" mt="sm" />
      <Group mt="sm" position="center">
        <Title order={4}>Mark Zuck</Title> <Rating value={4} readOnly />
      </Group>
      <Text c="dimmed" align="center">
        My favourite part is pepperoni
      </Text>
      <Pagination total={20} color="orange" position="center" mt="md" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 yinpiao wongtrakunmeka 650612103
      </Text>
    </Container>
  );
}