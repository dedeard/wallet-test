interface Window {
  solana?: {
    isPhantom: boolean
    connect(): Promise<{ publicKey: { toString(): string } }>
    disconnect(): void
    on(event: string, callback: () => void): void
    publicKey: { toString(): string }
  }
}