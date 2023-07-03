# repo

### Folder structure

```bash
.
├── README.md
├── scripts
│   ├── lessons.backup.ts
│   ├── lessons.clear.ts
│   └── lessons.delete.ts
├── apps
│   ├── (workspace)
│   │   ├── (folder)
│   │   │   ├── sandbox.ts
├── lib
├── docs
├── runners
.
```

To install dependencies:

```bash
bun install
```

To setup the lessons

```bash
bun run ./scripts/lessons.clear.ts
```

To backup the lessons

```bash
bun run ./scripts/lessons.backup.ts
```

To delete the lessons

```bash
bun run ./scripts/lessons.delete.ts
```
