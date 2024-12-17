const removeHtmlTags = (description: string) => {
  return description.replaceAll(/<[^>]*>/g, '')
}

export default removeHtmlTags
