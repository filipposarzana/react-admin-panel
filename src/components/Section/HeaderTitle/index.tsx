import { Text } from '~/components/Text'

type Props = {
  title: string
}

export const SectionHeaderTitle = ({ title }: Props) => (
  <Text colorName="gray900" kind="headingM">
    {title}
  </Text>
)
