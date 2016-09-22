![SpeedTracker logo](https://speedtracker.org/assets/images/logo-square-inverted-128.png)

# SpeedTracker Toolkit

This is a tiny web server that performs encryption and decryption of a given text with a key, using a AES 256 bits cipher in CTR mode.

## `GET /encrypt/:key/:text`

Uses `key` to encrypt `text` and returns the result.

The specified text must be encoded using `encodeURIComponent()`.

## `GET /decrypt/:key/:text`

Uses `key` to decrypt `text` and returns the result.
