import { EmptyUseCase } from '~/domain/usecase/empty'

test('true should return true', () => {
  const emptyUseCase = new EmptyUseCase()

  expect(emptyUseCase.getTrue()).toBe(true)
})