# 3D Workbench and Interaction Specification

## Core requirement

The workbench is a real interactive 3D environment, not a list of cards. It begins empty (or can be reset to empty). The inventory tray contains actual 3D apparatus/material assets. Tap or drag-and-drop places the selected object in the scene.

## Layout

- Top: subject, class, selected practical, session mode, exit and reset.
- Main: 3D workbench canvas with camera and lighting.
- Side/bottom tray: searchable, categorised apparatus/material inventory.
- Context panel: selected object's purpose, safety notes, supported actions and compatibility.
- Live analysis panel: experiment state, observations, readings and explanation.
- Notebook shortcut: raw readings and calculations.

On narrow screens, tray and analysis become collapsible bottom sheets. The workbench remains primary.

## Mandatory gestures

- Tap item in tray -> add a 3D instance at a safe default position.
- Drag item from tray to bench -> add at the drop location where supported.
- Select object -> highlight and open context panel.
- Drag object -> move on allowed plane/axis.
- Rotate -> rotate using gesture/control.
- Pinch/control -> zoom; camera orbit must not conflict with dragging a selected object.
- Remove -> remove selected object.
- Reset -> clear bench and restore initial experiment state after confirmation.
- Duplicate only if the experiment permits multiple instances.

## Manipulation constraints

Objects have stable IDs, scale metadata, anchor points, allowed transforms and interaction affordances. Glassware is constrained upright; instruments can snap to permitted positions; leads connect only to compatible terminals; slides align with microscope stages. Keep collision simple and predictable. Avoid heavy rigid-body physics unless a practical needs it.

## Accessibility and mobile

Every drag has a tap-to-add alternative. Provide buttons for rotate, zoom, move and remove. Do not rely on colour alone for state. Provide a 2D schematic fallback for low-end devices. Use low-poly meshes, compressed textures, instancing and lazy loading. Support reduced motion and avoid flashing effects.

## Asset requirements

Each asset needs stable ID, subject/category, source/licence, file format, scale, pivot, bounding box, material description, LOD, mobile budget and fallback icon/image. Prefer original assets or clearly permissive licences. Never commit assets with unclear licensing.

## Acceptance test

Open each subject lab, see an empty bench, tap and drag at least one real 3D object into it, move/rotate/zoom it, remove it and reset. The same interaction contract must work in Physics, Chemistry and Biology. This is a critical Phase 5 gate.
