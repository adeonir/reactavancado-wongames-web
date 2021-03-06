import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Email } from '@styled-icons/material-outlined'

import { TextField } from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField labelText="Label" labelFor="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render as required', () => {
    renderWithTheme(<TextField labelText="Label" labelFor="Field" required />)

    expect(screen.getByLabelText('Label *')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with an icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        labelText="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        labelText="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        labelText="TextField"
        labelFor="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField labelText="TextField" labelFor="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should be not accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        labelText="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
