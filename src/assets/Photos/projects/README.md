# Projektek képei

Ez a mappa tartalmazza a portfólió projektek preview képeit.

## Kép formátumok

### 1. Screenshot-ok használata
- **Méret**: 400x300px vagy hasonló aspect ratio
- **Formátum**: PNG vagy JPG
- **Név konvenció**: `{project-id}-preview.png`
- **Példa**: `healthy-skin-preview.png`

### 2. Favicon-ok használata
- **Forrás**: A weboldal favicon-ja
- **Fallback**: Ha nincs favicon, használj screenshot-ot

## Projekt képek

- ✅ `healthy-skin.png` - Healthy Skin Kozmetika (Élő: https://healthy-skin-2.netlify.app)
- `csetenyi-preview.png` - Csetényi Gergő Klímaszerelés
- `rozsa-preview.png` - Rózsa Zsolt Kárpitos

## Hogyan cseréld le a placeholder képeket

1. Készíts screenshot-ot vagy mentsd le a favicon-t
2. Mentsd el a megfelelő néven ebbe a mappába
3. Frissítsd a `src/config/projects.ts` fájlban az image elérési utat:
   ```typescript
   image: '/src/assets/Photos/projects/healthy-skin-preview.png'
   ```

## Automatikus fallback

Ha egy kép nem töltődik be, automatikusan megjelenik a placeholder ikon.
