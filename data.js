'use strict';
window.AMR = {
  resources: {
    motion: ['Modern Robotics · Chapter 13','https://modernrobotics.northwestern.edu/chapters/chapter13/','Watch 13.3.1 and 13.4. Explain wheel speeds, turning, integration and slip.','Free · video + text'],
    frames: ['Modern Robotics · Transformations','https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/','Learn translation, rotation, composition and inverse transforms; transform three known points.','Free · video'],
    ros: ['ROS 2 Humble · Tutorials','https://docs.ros.org/en/humble/Tutorials.html','Work through beginner CLI topics, services, actions and parameters. Confirm your installed distribution first.','Free · official docs'],
    tf: ['ROS 2 Humble · Introducing TF2','https://github.com/ros2/ros2_documentation/blob/humble/source/Tutorials/Intermediate/Tf2/Introduction-To-Tf2.rst','Inspect a transform tree; explain map → odom → base_link → sensors and timestamp ownership.','Free · Humble source'],
    bag: ['ROS 2 Humble · Record and replay','https://github.com/ros2/ros2_documentation/blob/humble/source/Tutorials/Beginner-CLI-Tools/Recording-And-Playing-Back-Data/Recording-And-Playing-Back-Data.rst','Record, inspect and replay a mission; preserve the configuration and software revision.','Free · Humble source'],
    nav: ['Nav2 · Tuning guide','https://docs.nav2.org/rolling/configuration_and_development/tuning_guide/','Study inflation, footprints and controller selection. This is Rolling documentation: use concepts, then check your release before applying settings.','Free · version check required'],
    cpp: ['ROS 2 Humble · C++ pub/sub','https://github.com/ros2/ros2_documentation/blob/humble/source/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Publisher-And-Subscriber.rst','Build a small rclcpp node after learning types, functions and callbacks; compare outputs with Python.','Free · Humble source'],
    filter: ['Welch & Bishop · Kalman filter','https://robotics.caltech.edu/~sam/TechReports/kalman/kalman_intro.pdf','Begin with mean, variance and the discrete filter; implement prediction and correction before the EKF.','Free · PDF'],
    slam: ['Stachniss · Mobile Sensing & Robotics 2','https://www.ipb.uni-bonn.de/msr2-2021/index.html','Choose introduction to SLAM, least squares and ICP in that order. Distinguish mapping from localisation.','Free · lectures'],
    calibration: ['OpenCV · Camera calibration','https://docs.opencv.org/4.12.0/dc/dbb/tutorial_py_calibration.html','Learn intrinsics, distortion and reprojection error; validate on held-out points. Match your installed OpenCV.','Free · tutorial'],
    marker: ['OpenCV · ArUco detection','https://docs.opencv.org/4.13.0/d5/dae/tutorial_aruco_detection.html','Detect known-size markers; use calibrated geometry to estimate pose. Check API compatibility with your OpenCV release.','Free · tutorial'],
    cloud: ['PCL · VoxelGrid filtering','https://pointclouds.org/documentation/tutorials/voxel_grid.html','Downsample a transformed cloud; measure retained geometry, not just point count.','Free · C++ tutorial']
  },
  projects: [
    {
      id:'warehouse', number:'01', name:'Reliable Warehouse AMR', short:'Warehouse AMR', subtitle:'Navigation, fault handling & benchmarking', start:'2026-10-06', deadline:'2026-12-15', accent:'green',
      problem:'A warehouse robot must finish delivery missions, respond predictably to blocked routes, and detect missing sensor data.',
      build:'Extend your logistics AMR into a reproducible ROS 2 simulation. Start with standard Nav2, add mission recording and bounded fault responses, then evaluate one controlled improvement.',
      scope:'One differential-drive robot, three fixed routes, existing-map localisation, one command owner, repeatable simulation trials and a small C++ diagnostics component.',
      exclusions:'No safety certification, fleet orchestration or advanced trajectory prediction in the initial release. Physical wiring and commissioning require a later hardware stage.',
      skills:['Differential-drive kinematics','Wheel odometry','ROS 2 & Python','TF2 & timestamps','Nav2 costmaps & control','Modern C++','Fault diagnosis','Experiment design','Linux & Git'],
      protocol:'Freeze the revision, world, map, robot footprint, start/goal poses, route timeouts, tolerances, obstacle schedule and seeds before evaluation. Use aligned simulation ground truth. Record failures, collisions and interventions as well as successful completion times. A zero command is not a measured physical stop.',
      metrics:[
        ['baseline','Reproducible baseline','Clean-workspace build and launch','Log dependencies, revision and a successful launch.'],
        ['motion','Wheel-motion model','All hand-checked cases pass','Declare numerical tolerance; test straight, curved and in-place motion.'],
        ['missions','Normal missions','≥27 / 30 successful trials','Ten trials on each of three predefined routes; no collision or intervention; within route timeout.'],
        ['goal','Waypoint accuracy','≤0.20 m; ≤10° where required','Check every waypoint against aligned ground truth, not only Nav2 action success.'],
        ['alternate','Blocked aisle with alternate route','≥8 / 10 successful trials','Fix obstacle placement and onset; record replanning and completion.'],
        ['blocked','Completely blocked route','10 / 10 bounded responses','Stop or enter bounded recovery, then report failure within the declared timeout.'],
        ['dropout','Scan-dropout command response','10 / 10 at ≤0.5 s','Measure time from last valid scan to final commanded velocity zero; record stopping distance separately.'],
        ['tracking','Cross-track RMSE','≤0.15 m at ≤0.20 m/s','Use a fixed reference path, aligned ground truth and a declared sampling method.'],
        ['improvement','Controlled improvement','≥15% lower tracking RMSE','Matched baseline/changed trials, without lower mission success or more collisions. Report absolute errors too.']
      ],
      weeks:[
        ['Restore a reproducible baseline','ros','Nodes, topics, launch files, Linux and Git. Record Ubuntu, ROS distribution and simulator.','Recover autonomous_logistics_sim source; document dependencies and launch standard Nav2.','Environment sheet, pinned revision and launch log.'],
        ['Understand wheel motion','motion','Explain unequal wheel speeds, pose integration, slip and drift.','Write a Python wheel-motion calculator; compare wheel estimates with simulation truth.','Hand calculations, script and trajectory plot.'],
        ['Make frames and time explicit','tf','Transform points between map, odom, base and sensor frames; study timestamps and QoS.','Draw the TF tree and trace scan → controller → final cmd_vel; diagnose three interface faults.','TF diagram, topic map and three short fault reports.'],
        ['Record a measurable mission','bag','Learn recording/replay; separate measurement, estimate and independent truth.','Record one fixed route; align poses in time and frame; define a trial CSV.','Replayable bag, aligned pose plot and draft protocol.'],
        ['Tune navigation deliberately','nav','Learn footprint, inflation, global planning and feedback control.','Compare baseline with one controller or costmap change; inspect velocity oscillation.','Matched tracking-error, clearance and velocity plots.'],
        ['Handle blocked routes','nav','Understand recovery, timeout and mission cancellation.','Test alternate-path and fully blocked scenarios; add bounded recovery and outcome logging.','Obstacle schedules and failure/recovery timelines.'],
        ['Test stale sensor inputs','ros','Learn freshness, command arbitration and invalid scan handling.','Inject scan dropout; verify final command timing; compare lost images vs no line.','Ten dropout logs and measured stopping-distance notes.'],
        ['Add a small C++ component','cpp','Learn C++ types, functions, ownership basics, callbacks and build tools.','Port scan validation or diagnostics; compare Python and C++ on identical inputs.','Build instructions and matching-output report.'],
        ['Run the frozen benchmark','bag','Learn paired comparisons, variability and honest failure accounting.','Freeze protocol; run 30 normal trials and planned blocked/dropout tests.','Raw CSV, bags, analysis scripts and plots.'],
        ['Package evidence for interviews','nav','Explain architecture, trade-offs, limitations and what you changed.','Write results and limitations; record a short demo; repeat clean setup.','README, reproducibility log, demo and planned-vs-actual review.']
      ]
    },
    {
      id:'localisation',number:'02',name:'Infrastructure-Assisted Localisation',short:'Assisted Localisation',subtitle:'Camera observations, sensor fusion & drift evaluation',start:'2026-12-15',deadline:'2027-02-23',accent:'purple',
      problem:'Wheel-based pose estimates drift. Can fixed overhead cameras supply useful observations that reduce localisation error?',
      build:'Extend your overhead-camera project with two calibrated cameras observing a robot-mounted marker. Compare wheel-only, camera-only and fused estimates against independent simulation ground truth.',
      scope:'Planar pose estimation, marker observations, a small Kalman-filter exercise, a suitable EKF pipeline, calibration sensitivity, delay/outage testing and a focused point-cloud exercise.',
      exclusions:'The first release is localisation and fusion, not lifelong SLAM. Radar–camera learning, markerless perception and persistent map updating are later extensions. Depth data is required for the point-cloud task.',
      skills:['Coordinate transforms','Camera calibration','OpenCV perception','Probability & covariance','Kalman filter & EKF','Localisation vs SLAM','Timing & sensor fusion','Point-cloud processing','Research evaluation'],
      protocol:'Keep ground truth out of the estimator. Declare known simulation calibration separately from estimated calibration. Fix routes, seeds, visibility region, marker size, camera rate, noise/slip and outage schedules. Align trajectories in time and frame. Compare 20 paired trials, report absolute RMSE and variability as well as percentage improvement.',
      metrics:[
        ['geometry','Geometry and timestamps','All declared transform tests pass','Known-point and inverse checks; camera optical axes, calibration and timestamps documented.'],
        ['camera','Camera-only pose accuracy','Position RMSE ≤0.10 m; yaw ≤5°','Evaluate within a fixed visible region; wrap yaw differences; independent simulation truth.'],
        ['availability','Observation availability','≥95% of eligible frames','Define visibility and projected marker-size conditions before counting; retain invalid examples.'],
        ['fusion','Filtering implementation','Working KF exercise + planar EKF','Document prediction, correction, covariance and chosen measurements; ground truth only for evaluation.'],
        ['drift','Drift reduction','≥30% lower position RMSE','20 paired slip/noise trials versus wheel-only; report absolute errors and per-trial variation.'],
        ['clean','Clean-condition comparison','No more than 10% worse RMSE','Separate clean trials; percentages unstable near zero baseline, so report metres too.'],
        ['outage','Camera outage / reacquisition','10 / 10 finite, crash-free runs','Log uncertainty and error growth during declared outages and on reacquisition.'],
        ['delay','Over-age observations','100% follow declared handling policy','Fix the age threshold before tests; log measurement age and accept/reject decision.'],
        ['cloud','Point-cloud reduction','≥50% fewer points; surface error ≤0.05 m','Use an overhead depth cloud, fixed voxel size and selected static surfaces; define comparison.']
      ],
      weeks:[
        ['Validate the geometry','frames','Learn rotations, homogeneous transforms and inverse composition.','Reuse the warehouse baseline; place two overhead cameras; verify known world points.','TF diagram, calibration assumptions and round-trip errors.'],
        ['Calibrate and detect the marker','calibration','Learn intrinsics, distortion, projection and held-out reprojection tests.','Render a known-size marker and detect it with OpenCV; establish visible operating region.','Calibration files, marker images and failure examples.'],
        ['Measure camera-only pose','marker','Convert marker-camera pose into world robot pose; handle yaw and timestamps.','Record observations and evaluate accuracy and eligible-frame availability.','Camera-only trajectory, RMSE and eligible/valid frame counts.'],
        ['Build estimation intuition','filter','Learn mean, variance, bias, covariance, matrix operations and prediction/correction.','Implement a small Python Kalman filter with seeded synthetic noisy measurements.','Raw/filtered/truth plots and explained equations.'],
        ['Integrate planar sensor fusion','filter','Understand EKF linearisation, measurement models and correlated inputs.','Combine wheel and overhead observations; avoid double-counting correlated measurements.','Documented state/model, covariance plots and fusion configuration.'],
        ['Challenge timing and visibility','tf','Understand delayed observations, rejection policies and uncertainty growth.','Inject ten camera outages and over-age measurements; test reacquisition.','Outage timelines, age decisions and finite-output checks.'],
        ['Process a 3D cloud','cloud','Learn frame transforms, voxel centroids and surface-distance measurement.','Acquire an overhead depth cloud; transform and downsample it; measure geometry retention.','Point counts, before/after cloud and surface-error report.'],
        ['Test calibration and clean conditions','slam','Distinguish localisation from SLAM; explore least squares and scan matching concepts.','Test calibration perturbations; compare fusion with clean wheel-only baseline.','Sensitivity plots, clean-condition errors and limitations.'],
        ['Run the paired experiments','bag','Learn controlled comparisons, fixed seeds and near-zero baseline caveats.','Run 20 paired slip/noise trials; compare wheel-only, camera-only and fused estimates.','Per-trial CSV, absolute RMSE, relative improvement and variability.'],
        ['Publish a defensible result','slam','Explain the observation model, uncertainty, failures and research next steps.','Write the report, record demo and reproduce the pipeline; choose one later extension.','Runnable code, report, demo, evidence and project retrospective.']
      ]
    }
  ]
};
