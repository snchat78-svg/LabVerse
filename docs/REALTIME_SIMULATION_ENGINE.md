# Real-Time Simulation Engine

## Purpose

Provide a live interactive loop responding to student actions and relevant environmental inputs. Real time means the scene and dashboard update during an experiment; it does not claim arbitrary physical accuracy. Each phenomenon has a declared model, validity range and limitations.

## Session state

A session stores an immutable experiment definition/content version; apparatus layout; selected materials/substances/specimens; quantities and initial conditions; relevant environment state; action history; computed domain state; generated observations; timer and assessment state.

## Simulation loop

1. Receive an action: place, connect, add, pour, swirl, heat, measure, focus, adjust, observe or remove.
2. Validate role, item compatibility, order, limits and safety constraints.
3. Resolve relevant domain rules using typed IDs and parameters.
4. Compute state transitions deterministically.
5. Emit observation events with provenance and conditions.
6. Update visual channels and dashboard from those events.
7. Generate/update explanation from the exact state transition.
8. Record the event in the notebook/session history.

Same initial state + same action sequence + same content version must produce the same result.

## Event types

APPARATUS_PLACED, APPARATUS_CONNECTED, MATERIAL_ADDED, SAMPLE_HEATED, INSTRUMENT_ADJUSTED, MEASUREMENT_TAKEN, FOCUS_CHANGED, REACTION_STARTED, REACTION_PROGRESS, REACTION_COMPLETED, OBSERVATION_RECORDED, ACTION_REJECTED and SESSION_RESET.

Events carry sequence number, actor, input parameters, rule ID, previous/new state references and output observations. Use simulated time for scientific calculations when possible.

## Live dashboard

Show only relevant information: apparatus/setup state; values and units; sample colour; precipitate/turbidity/gas/bubbling; pH/indicator; temperature/time trend; flame appearance in approved virtual demonstrations; optical/microscopic view; graph or observation timeline; analysis and uncertainty.

## Time model

Use a controllable simulation clock: pause, resume, step, reset and speed presets. Time-dependent models require documented parameters and units. Qualitative school experiments use qualitative progression and must not invent precise kinetic constants.

## Correctness and performance

- Domain rules are pure functions where practical.
- Rule pack version is stored with each session.
- Unit conversions are explicit.
- Numerical solvers use bounded inputs and documented tolerances.
- Any stochastic demo has a stored seed.
- Rules can report NOT_MODELLED, NEEDS_REVIEW or a limited educational approximation.
- Visual interpolation can be smooth; the underlying result remains structured and testable.
- Do not run expensive scientific computation on every animation frame. Update state on actions/model ticks; Three.js interpolates between authoritative states.
