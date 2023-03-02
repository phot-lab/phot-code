import numpy as np
from numpy.fft import fftshift, fft, ifft, ifftshift


def optical_fiber_channel(
    tx_signal_x: np.ndarray,
    tx_signal_y: np.ndarray,
    sampling_rate: float,
    span,
    num_steps,
    beta2,
    delta_z,
    gamma,
    alpha,
    L,
):