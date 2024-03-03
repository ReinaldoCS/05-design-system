import '../styles/tokens-grid.css'

import { Unstyled } from '@storybook/blocks'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <Unstyled>
      <table className="token-grid">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>

            {hasRemValue && <th>Pixels</th>}
          </tr>
        </thead>

        <tbody>
          {Object.entries(tokens).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Unstyled>
  )
}
